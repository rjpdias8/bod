import { Injectable } from '@angular/core';
import { Chat } from './chat.model';
import { HttpClient } from '@angular/common/http';
import { Api } from 'app/shared/api/api-url';

@Injectable({
    providedIn: 'root',
})
export class ChatService {

    constructor(private http: HttpClient, private apiurl: Api) {}

    sendMessage(body) {
        return this.http.post(this.apiurl.baseUrl + this.apiurl.sendMessageUrl, body);
    }

    getMessageUserGroup() {
        return this.http.get(this.apiurl.baseUrl + this.apiurl.getUserGroupUrl);
    }

    getMessage(id) {
        return this.http.get(this.apiurl.baseUrl + this.apiurl.getMessageUrl + '/' + id);
    }

    public chat1: Chat[] = [
        new Chat(
            'right',
            'chat',
            'assets/img/user-images/amit.png',
            '',
            [
                'How can we help? We are here for you!'
            ],
            'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-3.png',
            '1 hour ago',
            [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 5 bootstrap compatible.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/user-images/amit.png',
            '30 minutes ago',
            [
                'Absolutely!',
                'Apex admin is the responsive angular 5 bootstrap admin template.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-3.png',
            '20 minutes ago',
            [
                'Can you provide me audio link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/user-images/amit.png',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-3.png',
            '10 minutes ago',
            [
                'Can you provide me video link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/user-images/amit.png',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-3.png',
            'just now',
            [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/user-images/amit.png',
            '',
            [
                'Thanks, from ThemeForest.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-3.png',
            '',
            [
                'I will purchase it for sure.',
                'Thanks.'
            ]
            , 'text'),
    ];
    public chat2: Chat[] = [
        new Chat(
            'right',
            'chat',
            'assets/img/user-images/amit.png',
            '',
            [
                'How can we help'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.png',
            '1 hours ago',
            [
                'Hi, I spoke with a representative yesterday.',
                'he gave me some steps to fix my problem',
                'but they didn’t help.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/user-images/amit.png',
            '20 minutes ago',
            [
                'Can you provide me audio link of your conversation?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.png',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'right',
            'chat',
            'assets/img/user-images/amit.png',
            '10 minutes ago',
            [
                'Can you provide me video link of your issue?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.png',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'right',
            'chat',
            'assets/img/user-images/amit.png',
            '',
            [
                'I’m sorry to hear that',
                'Can I ask which model of projector you own?',
                'What steps did he suggest you to take?',
                'What sort of issue are you having?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.png',
            '',
            [
                'An issue with the power.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/user-images/amit.png',
            '',
            [
                'Did you make sure the outlet you plugged it into was functional.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.png',
            '',
            [
                'Yes'
            ]
            , 'text'),
    ];
    
    
}