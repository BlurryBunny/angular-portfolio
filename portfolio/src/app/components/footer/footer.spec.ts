import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería tener enlaces con target="_blank" para redes sociales', () => {
    const links = fixture.nativeElement.querySelectorAll('.social-icon');
    links.forEach((link: HTMLAnchorElement) => {
      // El link de mailto no suele llevar target blank, lo saltamos
      if (!link.href.includes('mailto:')) {
        expect(link.target).toBe('_blank');
      }
    });
  });

  it('debería mostrar el nombre del desarrollador correctamente', () => {
    component.developerName = 'Ulises';
    fixture.detectChanges();
    const p = fixture.nativeElement.querySelector('.copyright');
    expect(p.textContent).toContain('Ulises');
  });
});
