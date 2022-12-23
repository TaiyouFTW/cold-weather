import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() { }

  codeToIcon(code: number) {
    let icon = '';
    switch (code) {
      case 1:
      case 2:
      case 3:
        icon = 'cloud-sun';
        break;

      case 45:
      case 48:
        icon = 'smog';
        break;

      case 51:
      case 53:
      case 55:
        icon = 'smog';
        break;

      case 56:
      case 57:
        icon = 'cloud-rain';
        break;

      case 61:
      case 63:
      case 65:
        icon = 'cloud-showers-heavy';
        break;

      case 66:
      case 67:
        icon = 'snowflake';
        break;

      case 71:
      case 73:
      case 75:
        icon = 'snowflake';
        break;

      case 77:
        icon = 'cloud-meat-ball';
        break;

      case 80:
      case 81:
      case 82:
        icon = 'cloud-showers-heavy';
        break;

      case 85:
      case 86:
        icon = 'snowflake';
        break;

      case 95:
        icon = 'cloud-bolt';
        break;

      case 96:
      case 99:
        icon = 'cloud-bolt';
        break;

      default:
        icon = 'sun';
        break;
    }

    return icon;
  }
}

