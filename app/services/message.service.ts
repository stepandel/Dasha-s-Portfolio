import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Message } from '../models/Message';
import { Inquiry } from '../models/Inquiry';

@Injectable()
export class MessageService {
  messageCollection: AngularFirestoreCollection<Message>;
  inquiryCollection: AngularFirestoreCollection<Inquiry>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.messageCollection = this.afs.collection('messages');
    this.inquiryCollection = this.afs.collection('inquiries');
   }

   newMessage(message: Message){
    this.messageCollection.add(message);
   }

   newInquiry(inquiry: Inquiry){
     this.inquiryCollection.add(inquiry);
   }

}
