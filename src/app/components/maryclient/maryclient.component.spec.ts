import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaryclientComponent } from './maryclient.component';
import { ChildformaryComponent } from './childformary/childformary.component';
import { HttpClientModule } from '@angular/common/http';

describe('MaryclientComponent', () => {
  let component: MaryclientComponent;
  let fixture: ComponentFixture<MaryclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,HttpClientModule ],
      declarations: [ MaryclientComponent, ChildformaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaryclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'maryttsclient'`, () => {   
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('maryttsclient');
  });

  it('should render title in a h1 tag', () => {   
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to maryttsclient!');
  });

  it('the first h1 should have the "test" CSS class applied', () => {    
    expect(fixture.debugElement.nativeElement.querySelector('h1').getAttribute('class')).toEqual('test');
  });

  it('the fifth p should have the "fifth-p" CSS class applied', () => {    
    expect(fixture.debugElement.nativeElement.querySelector('p:nth-of-type(5)').getAttribute('class')).toEqual('fifth-p');
  });

  it('first input of type text should have placeholder equal to "Please insert some input"', () => {      
    expect(fixture.debugElement.nativeElement.querySelector('input[type="text"]:first-of-type').getAttribute('placeholder')).toEqual('Please insert some input');
  });

  it('should call method ChangeClass() on button click', async(() => {
    spyOn(component, 'ChangeClass');  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.ChangeClass).toHaveBeenCalled();
    })
  }));


});
