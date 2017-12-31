import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import renderRoutes from '/imports/startup/client';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});
