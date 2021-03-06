import ReviewForm from '../../src/components/ReviewForm';
import ReviewFormContainer from '../../src/containers/ReviewFormContainer';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('ReviewFormContainer', () => {
  let wrapper

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<ReviewFormContainer
    />);
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      ratingErrors: '',
      rating: null,
      description: ''
    });
  });

  it('should render a ReviewForm component with props', () => {
    expect(wrapper.find(ReviewForm)).toBePresent();
    expect(wrapper.find(ReviewForm).props()).toEqual({
      handleClearForm: jasmine.any(Function),
      handleUpdate: jasmine.any(Function),
      handleNew: jasmine.any(Function),
      handleDelete: jasmine.any(Function),
      handleRatingChange: jasmine.any(Function),
      handleCancel: wrapper.props().handleCancel,
      rating: wrapper.state().rating,
      description: wrapper.state().description,
      handleDescriptionChange: jasmine.any(Function),
      newOrUpdate: wrapper.props().newOrUpdate
    });
  });
})
