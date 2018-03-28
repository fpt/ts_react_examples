import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../atoms/Buttons';
import Input from '../atoms/Inputs';
import { TimezoneSelect } from '../atoms/TimezoneSelect';
import { NoImageIcon } from '../atoms/Icons';
import TabItem from '../atoms/TabItem';
import { SuccessNotification, WarningNotification, ErrorNotification } from '../atoms/Notifications';
import { Language } from './DummyLanguage';


storiesOf('Atoms.Button', module)
  .add('with a text', () => (
    <Button>My First Button</Button>
  ));

storiesOf('Atoms.Input', module)
  .add('input', () => (
    <Input/>
  ));

storiesOf('Atoms.TimezoneSelect', module)
  .add('en', () => (
    <Language lang="en">
      <TimezoneSelect
        selected={'one'}
        options={[
          { id: 'one', text: 'One', textEn: 'One' },
          { id: 'two', text: 'Two', textEn: 'Two' },
          { id: 'three', text: 'Three', textEn: 'Three' },
          { id: 'four', text: 'Four', textEn: 'Four' },
          { id: 'five', text: 'Five', textEn: 'Five' },
          { id: 'six', text: 'Six', textEn: 'Six' },
        ]}
        onFlipOpen={() => {}}
        onFlipClose={() => {}}
        onChange={(value: any) => alert(value)}
      />
    </Language>
  ))
  .add('ja', () => (
    <Language lang="ja">
      <TimezoneSelect
        selected={'one'}
        options={[
          { id: 'one', text: '一', textEn: 'One' },
          { id: 'two', text: '二', textEn: 'Two' },
          { id: 'three', text: '三', textEn: 'Three' },
          { id: 'four', text: '四', textEn: 'Four' },
          { id: 'five', text: '五', textEn: 'Five' },
          { id: 'six', text: '六', textEn: 'Six' },
        ]}
        onFlipOpen={() => {}}
        onFlipClose={() => {}}
        onChange={(value: any) => alert(value)}
      />
    </Language>
  ));

storiesOf('Atoms.Icon', module)
  .add('no image', () => (
    <NoImageIcon/>
  ));

storiesOf('Atoms.TabItem', module)
  .add('a tabitem', () => (
    <TabItem>Choose me</TabItem>
  ));

storiesOf('Atoms.Notifications', module)
  .add('success notification', () => (
    <SuccessNotification>Notify me</SuccessNotification>
  ))
  .add('warning notification', () => (
    <WarningNotification>Notify me</WarningNotification>
  ))
  .add('error notification', () => (
    <ErrorNotification>Notify me</ErrorNotification>
  ));

