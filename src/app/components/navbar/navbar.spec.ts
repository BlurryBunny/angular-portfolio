import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar';
import { provideRouter } from '@angular/router'; // Proveedor moderno para tests
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([])] // Configuración mínima de rutas para el test
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería mostrar el nombre de la marca', () => {
    const brandElement = fixture.nativeElement.querySelector('.nav-brand');
    expect(brandElement.textContent).toContain(component.brandName);
  });

  it('debería tener el enlace a Proyectos con el routerLink correcto', () => {
    const link = fixture.debugElement.query(By.css('a[routerLink="/projects"]'));
    expect(link).toBeTruthy();
  });

  it('debería tener tres enlaces de navegación principales', () => {
    const links = fixture.nativeElement.querySelectorAll('.nav-links li');
    expect(links.length).toBe(3);
  });
});
