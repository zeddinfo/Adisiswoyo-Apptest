
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../App';
import { Button, CardContact, Header, Input } from '../src/components';
import { describe } from '@jest/globals';
import { CreatePage, EditPage, ListContact } from '../src/pages';
import { Provider } from 'react-redux';
import { store } from '../src/redux';
import { Actions } from 'react-native-router-flux';

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[testID='${attr}']`);
  return wrapper;
};

jest.mock('react-native-router-flux', () => ({
  Actions: {
    sceneKey: jest.fn()
  }
}))


describe('App Screen ', () => {
  it('should renders `App Screen` is correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot()
  })
});

describe('List Contact Screen', () => {
  it('should renders `List Contact` is correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ListContact />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('Render `Card Contacts`', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        firstName: 'Example',
        lastName: 'Example',
        age: 10,
        photo: 'string'
      }
      wrapper = shallow(<CardContact firstName={props.firstName} lastName={props.lastName} age={props.age} image={props.photo} />)
    });

    it('Should renders without error', () => {
      const component = findByTestAtrr(wrapper, 'card-test');
      expect(component.length).toBe(1);
    });

    it('Should press and navigate to `Detail`', () => {
      const component = findByTestAtrr(wrapper, 'card-test');
      component.simulate('press');
      expect(Actions.sceneKey.mock.calls.legth)
    })
  });

  describe('Detail Screen', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Provider store={store}><EditPage /></Provider>)
    });
    describe('Change Data', () => {
      it('Should change `firstname or last name or age`', () => {
        let input = shallow(<Input />)
        input.find('[testID="input-test"]').simulate('change');
        expect(Actions.sceneKey.mock.calls.legth);
      })
    });
    describe('Update Data', () => {
      it('Should press `Button Update to save data`', () => {
        let button = shallow(<Button />)
        button.find('[testID="button"]').simulate('press');
        expect(Actions.sceneKey.mock.calls.length)
      })
    });
    describe('Delete Data', () => {
      it('Should press `Button Trash to delete data`', () => {
        let button = shallow(<Header />)
        button.find('[testID="delete-button"]').simulate('press');
        expect(Actions.sceneKey.mock.calls.length)
      })
    });

  });

  describe('Created Contact', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Provider store={store}><CreatePage /></Provider>)
    });
    describe('Change Data', () => {
      it('Should change `firstname or last name or age`', () => {
        let input = shallow(<Input />)
        input.find('[testID="input-test"]').simulate('change');
        expect(Actions.sceneKey.mock.calls.legth);
      })
    });
    describe('Save Data', () => {
      it('Should press `Button to save data`', () => {
        let button = shallow(<Button />)
        button.find('[testID="button"]').simulate('press');
        expect(Actions.sceneKey.mock.calls.length)
      })
    });
  })

})



