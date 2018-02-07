import {Component, HostBinding, Inject, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ThemesService, SettingsService, TitleService } from '@delon/theme';
import { filter, map } from 'rxjs/operators';
import {StartupService} from '@core/startup/startup.service';
import {DA_SERVICE_TOKEN, ITokenService} from "@delon/auth";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  @HostBinding('class.layout-fixed') get isFixed() { return this.settings.layout.fixed; }
  @HostBinding('class.layout-boxed') get isBoxed() { return this.settings.layout.boxed; }
  @HostBinding('class.aside-collapsed') get isCollapsed() { return this.settings.layout.collapsed; }

  constructor(
    private startupService: StartupService,
    private theme: ThemesService,
    private settings: SettingsService,
    private router: Router,
    private titleSrv: TitleService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) {
  }

  ngOnInit() {
      this.router.events
          .pipe(filter(evt => evt instanceof NavigationEnd))
          .subscribe(() => this.titleSrv.setTitle());
    const status = this.startupService.check();
    if (status) {
        this.startupService.load();
        this.router.navigateByUrl('/author/user');
    } else {
        console.log('未登录');
        this.router.navigateByUrl(this.tokenService.login_url);
    }
  }
}
