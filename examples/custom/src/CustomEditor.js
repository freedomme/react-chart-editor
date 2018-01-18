import React, {Component} from 'react';
import {
  Flaglist,
  ColorPicker,
  Fold,
  PanelMenuWrapper,
  TextEditor,
  Radio,
  Dropdown,
  Info,
  Section,
  Numeric,
  LayoutPanel,
  MenuPanel,
  Button,
  SingleSidebarItem,
} from 'react-plotly.js-editor';

export default class CustomEditor extends Component {
  render() {
    return (
      <PanelMenuWrapper>
        <LayoutPanel group="Panel Menu Wrapper" name="Panel">
          <Fold name="Fold">
            <Info>
              <p>
                This custom editor demonstrates the general-purpose container
                and field components.
              </p>
              <p>
                This is an <code>Info</code> component.
              </p>
            </Info>
            <Section name="Section">
              <MenuPanel>
                <Info> MenuPanel </Info>
              </MenuPanel>
              <Numeric label="Numeric" attr="width" show units="units" />
              <Dropdown
                label="Dropdown"
                attr="xaxis.title"
                show
                options={[
                  {label: 'Yes', value: 'yes'},
                  {label: 'No', value: 'no'},
                ]}
              />
              <Radio
                label="Radio"
                attr="yaxis.title"
                show
                options={[
                  {label: 'Yes', value: 'yes'},
                  {label: 'No', value: 'no'},
                ]}
              />
              <Flaglist
                label="Flaglist"
                attr="titlefont.family"
                show
                options={[
                  {label: 'Yes', value: 'y'},
                  {label: 'No', value: 'n'},
                ]}
              />
              <ColorPicker label="ColorPicker" attr="plot_bgcolor" show />
              <TextEditor
                attr="title"
                label="MultiFormat TextEditor"
              />
            </Section>
          </Fold>
        </LayoutPanel>
        <SingleSidebarItem>
          <Button
            variant="primary"
            label="save"
            onClick={() => alert('save button clicked!')}
          />
        </SingleSidebarItem>
        <SingleSidebarItem>
          <Button
            variant="secondary"
            label="clear"
            onClick={() => alert('clear button clicked!')}
          />
        </SingleSidebarItem>
      </PanelMenuWrapper>
    );
  }
}
