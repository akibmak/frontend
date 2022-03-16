import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }
  public user = {
    username:'',
    useremail:'',
    password:''

  }
  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null){
      // alert('User is required!!');
      this.snack.open('Username is required !!','ok',{
        duration:3000,
      });
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data);
        //alert('success');
        Swal.fire('Successfully done!!','User is registered','success');
      },
      (error)=>{
        console.log(error);
        //alert('Something went wrong');
        this.snack.open('Something went wrong!!','',{
          duration:3000,
        })
      }
    );
    
  }
}
