import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})

export class DetalleComponent {
    constructor(private route: ActivatedRoute) {
        console.log(this.route.snapshot.params['id']);
        console.log(this.route.snapshot.queryParams['action2']);
        console.log(this.route.snapshot.queryParams['referer']);
    }
}