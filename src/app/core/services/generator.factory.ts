import { GeneratorService } from './generator.service';

export function GeneratorFactory(n: number) {
  return function (generatorService: GeneratorService): string {
    return generatorService.generate(n);
  };
}
