export class Api {
  baseUrl = 'http://18.222.136.92/api/';
  registerUrl = 'user/register/';
  loginUrl = 'api-token-auth/';
  forgetPassword = 'user/forgetPassword/';
  forgetPassword2 = 'user/passwordForgetUpdate/';
  userProfile = 'user/profile/';
  areaList = 'user/areaList';
  userDirector = 'user/myDirector';
  changePasswordUrl = 'user/passwordUpdate/';
  sendInvitationUrl = 'user/mySentInvitations/';
  receiveInvitationUrl = 'user/myReceivedInvitations/';
  sendEmailInvitationUrl = 'user/sendEmailInvitation/';
  searchDirectorUrl = 'user/searchDirector';
  invitationDescionUrl = 'user/invitationDecision';
  myBoardMembersUrl = 'user/myBoardMembers';
  iamBoardMemeberUrl = 'user/myBoards';

  getUserGroupUrl = 'user/getMyGroups';
  sendMessageUrl = 'user/postMessage';
  getMessageUrl = 'user/getMessages';
}
