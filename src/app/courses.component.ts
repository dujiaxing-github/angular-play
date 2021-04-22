import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    {{ course.title | uppercase |lowercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'2.1-1' }} <br/>
    {{ course.price | currency:'USD'}} <br/>
    {{ course.releaseDate | date:'shortDate' }} <br/>
    {{ text | summary:20 }} <br/>
    `

})
export class CoursesComponent {
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30213,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    text = `
    This Webex service includes a feature that allows audio and any documents and other materials exchanged or viewed during the session to be recorded. By joining this session, you automatically consent to such recordings. If you do not consent to the recording, discuss your concerns with the meeting host prior to the start of the recording or do not join the session. Please note that any such recordings may be subject to discovery in the event of litigation. 
    `
}