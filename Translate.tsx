import * as React from 'react';
import { Translate as PersonioWebTranslate } from '@personio-web/translate-component';
import { MICRO_FRONTEND_TRANSLATION_NAMESPACE } from '../../../application/config/constants';

type TranslateProps = React.ComponentProps<typeof PersonioWebTranslate>;

const Translate = (props: TranslateProps): JSX.Element => {
  return (
    <PersonioWebTranslate
      {...props}
      namespace={MICRO_FRONTEND_TRANSLATION_NAMESPACE}
    />
  );
};

export default Translate;
