import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-server', // prefix with "app" followed by name
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
