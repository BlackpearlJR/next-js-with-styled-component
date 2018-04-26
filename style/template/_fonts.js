import { injectGlobal } from 'styled-components';

import prompt_regular_ttf from '../fonts/prompt/prompt-regular.ttf';
import prompt_regular_eot from '../fonts/prompt/prompt-regular.eot';
import prompt_regular_svg from '../fonts/prompt/prompt-regular.svg';

import prompt_semibold_ttf from '../fonts/prompt/prompt-semibold.ttf';
import prompt_semibold_eot from '../fonts/prompt/prompt-semibold.eot';
import prompt_semibold_svg from '../fonts/prompt/prompt-semibold.svg';

import pattaya_regular_ttf from '../fonts/pattaya/pattaya-regular.ttf';
import pattaya_regular_eot from '../fonts/pattaya/pattaya-regular.eot';
import pattaya_regular_svg from '../fonts/pattaya/pattaya-regular.svg';

const font_path = '../fonts';

const prompt = {
  folder: 'prompt',
  regular: {
    weight: 400,
    file_name: 'prompt-regular'
  },
  semibold: {
    weight: 600,
    file_name: 'prompt-semibold'
  }
};

const pattaya = {
  regular: {
    weight: 'normal',
    file_name: 'pattaya-regular'
  },
}

injectGlobal`
  @font-face {
    font-family: 'Prompt';
    src: url('${prompt_regular_eot}');
    src: url('${prompt_regular_eot}?#iefix') format('embedded-opentype'),
    url('${prompt_regular_ttf}') format('truetype'),
    url('${prompt_regular_svg}#${prompt.regular.file_name}') format('svg');
    font-weight: ${prompt.regular.weight};
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Prompt';
    src: url('${prompt_semibold_eot}');
    src: url('${prompt_semibold_eot}?#iefix') format('embedded-opentype'),
    url('${prompt_semibold_ttf}') format('truetype'),
    url('${prompt_semibold_svg}#${prompt.semibold.file_name}') format('svg');
    font-weight: ${prompt.semibold.weight};
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Pattaya';
    src: url('${pattaya_regular_eot}');
    src: url('${pattaya_regular_eot}?#iefix') format('embedded-opentype'),
    url('${pattaya_regular_ttf}') format('truetype'),
    url('${pattaya_regular_svg}#${pattaya.regular.file_name}') format('svg');
    font-weight: ${pattaya.regular.weight};
    font-style: normal;
  }
  
`;