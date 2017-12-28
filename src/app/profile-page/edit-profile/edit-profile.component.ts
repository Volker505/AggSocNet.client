import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  @Input() ferstName: string;
  @Input() lastName: string;
  @Input() email: string;
  @Input() password: string;
  @Input() passwordReplay: string;
  @Input() city: string;
  @Input() sex: string;


  constructor() { }

  ngOnInit() {
  }

  change(){
    console.log(this.ferstName,this.lastName);
  }

}
