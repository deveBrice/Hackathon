import { Component, OnInit } from '@angular/core';
import { Participant } from '../model/participant';
import { ParticipantService } from '../service/participantService';

@Component({
  selector: 'app-register',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})

export class ParticipantComponent implements OnInit {

    participant: Array<Participant>;

    constructor(private participantService: ParticipantService){}

    ngOnInit(){
      this.getParticipant()
    }

    getParticipant(){
        this.participantService.getAllParticipant()
        .subscribe((res: Array<Participant>) =>{
            this.participant = res;
            console.log(this.participant)
        })
    }
}