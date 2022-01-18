import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional, Self } from '@angular/core';

import { Category, CoverType, Type } from '../../../shared/models/shared.models';
import { CONSTANTS } from '../../../core/services/constants.service';
import { ConstantsModel } from '../../../core/models/constants.model';
import { AppInfo } from './first.constants';
import { GeneratedString, GeneratorService } from '../../../core/services/generator.service';
import { GeneratorFactory } from '../../../core/services/generator.factory';
import { LocalStorageService, STORAGE } from '../../../core/services/local-storage.service';
import { ConfigOptionsService } from '../../../core/services/config-options.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    { provide: CONSTANTS, useValue: AppInfo },
    { provide: GeneratedString, useFactory: GeneratorFactory(5), deps: [GeneratorService] },
    { provide: STORAGE, useValue: LocalStorageService },
    ConfigOptionsService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponent implements OnInit {
  name: string = 'The Lord of the Rings';
  description: string =
    'One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.';
  price: number = 20;
  category: Category = Category.Fantasy;
  isAvailable: boolean = true;
  types: Type[] = [Type.Printed, Type.Audio];
  coverTypes: CoverType[] = [CoverType.Hardcover, CoverType.Softcover];

  constructor(
    @Inject(CONSTANTS) private constant: ConstantsModel,
    @Inject(GeneratedString) private generatedString: string,
    @Inject(STORAGE) private localStorage: LocalStorageService,
    @Self() @Optional() private configOptionsService: ConfigOptionsService,
  ) {}

  ngOnInit(): void {
    console.log(this.constant);
    console.log(this.generatedString);
    console.log(this.localStorage.length);
    console.log(this.configOptionsService?.getConfig() ?? 'ConfigOptionsService is not found.');
  }
}
