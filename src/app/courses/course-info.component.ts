import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent {

    course: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {}

    ngOnInit(): void {
        this.courseService.retrivebyId(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.course = course,
            error: error => console.log('Erro', error)
        })
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with success', course),
            error: error => console.log('Erro', error)
        })
    }
}