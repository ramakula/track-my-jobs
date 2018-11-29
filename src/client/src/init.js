import { library } from '@fortawesome/fontawesome-svg-core';

import forts from './pkgs/fortawesome';

export default _ => {
  forts.forEach(fort => library.add(fort));
};
