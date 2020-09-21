import { Component, ViewChild, ElementRef, OnInit, ChangeDetectionStrategy, Renderer2 } from '@angular/core';
import { ChatService } from './chat.service';
import { Chat } from './chat.model';
import { Router , ActivatedRoute, NavigationEnd  } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {

  chat: Chat[];
  activeChatUser: string;
  activeChatUserImg: string;
  @ViewChild('messageInput', {static: false}) messageInputRef: ElementRef;
  @ViewChild('chatSidebar', {static: false}) sidebar:ElementRef;
  @ViewChild('contentOverlay', {static: false}) overlay:ElementRef;

  messages = new Array();
  item: number = 0;
  groupUser: any = [];
  groupId: any = 0;
  userId: any = 0;
  constructor(private elRef: ElementRef, private renderer: Renderer2, 
    private chatService: ChatService,
    private router: Router,
    private route: ActivatedRoute,) {
    this.chat = chatService.chat1;
    this.activeChatUser = 'My Board';
    this.activeChatUserImg = 'assets/img/portrait/small/avatar-s-3.png';
  }

  ngOnInit() {
    this.userId = this.route.snapshot.params.userId;
    console.log(this.userId)
    // $.getScript('./assets/js/chat.js');
    // this.groupUser = setInterval(() => { this.chatService.getMessageUserGroup().subscribe((data) => {
    //   console.log(data);
    // }) }, 10000);

    this.chatService.getMessageUserGroup().subscribe((data) => {
        console.log(data);
        this.groupUser = data;
        console.log(this.groupUser);
        this.groupId = this.groupUser[0]['groupId'];
        this.activeChatUser =  this.groupUser[0].userOrGroupName;
        this.activeChatUserImg =  this.groupUser[0].userOrGroupImguserOrGroupImg;
        this.chatService.getMessage(this.groupId).subscribe((messagedata: []) => {
          console.log(messagedata);
          this.messages = messagedata;
        });
      });
  }

  // send button function calls
  onAddMessage() {

    if (this.messageInputRef.nativeElement.value !== '') {
      const body = {
        'board_id': 10,
        // 'user_id': 12,
        'message': this.messageInputRef.nativeElement.value
      }
      this.messages.push(this.messageInputRef.nativeElement.value);
      if (this.groupId === 0) {
        this.chatService.sendMessage(body).subscribe((senMessagedata) => {
          console.log(senMessagedata);
          this.groupUser = this.chatService.getMessageUserGroup().subscribe((groupUserdata: []) => {
            console.log(groupUserdata);
            this.groupId = groupUserdata[groupUserdata.length - 1]['groupId'];
            this.chatService.getMessage(this.groupId).subscribe((messagedata: []) => {
              console.log(messagedata);
              this.messages = messagedata;
            });
          });
        });
      } else {
        this.chatService.sendMessage(body).subscribe((senMessagedata) => {
          console.log(senMessagedata);
            this.chatService.getMessage(this.groupId).subscribe((messagedata: []) => {
              console.log(messagedata);
              this.messages = messagedata;
            });

        });

      }
    }
    this.messageInputRef.nativeElement.value = '';
    this.messageInputRef.nativeElement.focus();
  }

  // chat user list click event function
  SetActive(event, chatData) {
    var hElement: HTMLElement = this.elRef.nativeElement;
    // now you can simply get your elements with their class name
    var allAnchors = hElement.getElementsByClassName('list-group-item');
    // do something with selected elements
    [].forEach.call(allAnchors, function (item: HTMLElement) {
      item.setAttribute('class', 'list-group-item no-border');
    });
    // set active class for selected item
    event.currentTarget.setAttribute('class', 'list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2');

     this.messages = [];
     this.activeChatUser = chatData.userOrGroupName;
     this.activeChatUserImg = chatData.userOrGroupImguserOrGroupImg;
    this.chatService.getMessage(chatData.groupId).subscribe((messagedata: []) => {
      console.log(messagedata);
      this.messages = messagedata;
    });

    // if (chatId === 'chat1') {
    //   this.chat = this.chatService.chat1;
    //   this.activeChatUser = 'My Board';
    //   this.activeChatUserImg = 'assets/img/portrait/small/avatar-s-3.png';
    // } else if (chatId === 'chat2') {
    //   this.chat = this.chatService.chat2;
    //   this.activeChatUser = 'Manoj Gupta';
    //   this.activeChatUserImg = 'assets/img/portrait/small/avatar-s-7.png';
    // }

  }

  onSidebarToggle() {
    this.renderer.removeClass(this.sidebar.nativeElement, 'd-none');
    this.renderer.removeClass(this.sidebar.nativeElement, 'd-sm-none');
    this.renderer.addClass(this.sidebar.nativeElement, 'd-block');
    this.renderer.addClass(this.sidebar.nativeElement, 'd-sm-block');
    this.renderer.addClass(this.overlay.nativeElement, 'show');
  }

  onContentOverlay() {
    this.renderer.removeClass(this.overlay.nativeElement, 'show');
    this.renderer.removeClass(this.sidebar.nativeElement, 'd-block');
    this.renderer.removeClass(this.sidebar.nativeElement, 'd-sm-block');
    this.renderer.addClass(this.sidebar.nativeElement, 'd-none');
    this.renderer.addClass(this.sidebar.nativeElement, 'd-sm-none');

  }

}

