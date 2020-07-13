import React from 'react'
import RxButton from '.'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import './../../styles/reactsax.scss'
import './style.scss'
export default {
  title: 'Button',
  component: 'RxButton',
  decorators: [withKnobs]
}

export const Button = () => (
  <>
    <RxButton shadow onClick={action('Clicked')} active>
      Try
    </RxButton>
    <RxButton transparent>Try</RxButton>
    <RxButton icon>Try</RxButton>
    <RxButton loading>Loading</RxButton>
    <RxButton upload>upload</RxButton>
    <RxButton floating>floating</RxButton>
    <RxButton color='facebook'>facebook</RxButton>
    <RxButton animate animationType='scale' size='xl'>
      Home<animate>hey</animate>
    </RxButton>
  </>
)
