import { InjectionToken } from '@angular/core';

import { ConstantsModel } from '../models/constants.model';

export const CONSTANTS = new InjectionToken<ConstantsModel>('constants');
