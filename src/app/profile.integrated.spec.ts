import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { ProfileComponent } from './profile.component';
import { ApiService } from './api.service';
import { MessagesComponent } from './messages.component';
import { ActivatedRoute } from '@angular/router';

 
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

describe('ProfileComponent', () => {
    let fixture: ComponentFixture<ProfileComponent>,
    component: ProfileComponent, 
    element: HTMLElement,
    debugEl: DebugElement;

    beforeEach(async(() => {
        let mockApiService = { getProfile: () => of({ email: 'test@email.com', name: 'Peter Test', description: 'This is a test'}),
                                getMessages: () => of({ message: 'hollo'} )};
        let mockRouter = { snapshot: { params: 5 }};

        TestBed.configureTestingModule({
            imports: [MatCardModule, MatToolbarModule, MatListModule],
            declarations: [ ProfileComponent, MessagesComponent ],
            providers: [ { provide: ApiService, useValue: mockApiService },
                         { provide: ActivatedRoute, useValue: mockRouter}],
            schemas: []
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })

    describe('Profile display', () => {
        it('should have the correct userEmail', () => {
            fixture.detectChanges();
            expect(component.user.email).toBe('test@email.com');
        })
    })

    describe('Profile display', () => {
        it('should have the correct user', () => {
            fixture.detectChanges();
            expect(component.user.email).toBe('test@email.com');
        })

        it('should have the correct name', () => {
            fixture.detectChanges();
            expect(component.user.name).toBe('Peter Test');
        })
    })

})