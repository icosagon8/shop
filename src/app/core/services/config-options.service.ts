import { Injectable } from '@angular/core';

import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigOptionsService {
  config: ConfigModel = { id: 1, login: 'admin', email: 'admin@site.com' };

  getConfig() {
    return this.config;
  }

  setConfig(config: Partial<ConfigModel>) {
    this.config = { ...this.config, ...config };
  }
}
