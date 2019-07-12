import { Injectable } from '@angular/core';
import { Participant } from '../model/participant';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ParticipantService {

    constructor(private httpClient: HttpClient){}
     
     //api of participants
     api = "http://localhost:3600/participants";

    //create a observable for get all the participant
    getAllParticipant(): Observable<Array<Participant>> {
      return this.httpClient.get<Array<Participant>>(this.api);
    }
}
