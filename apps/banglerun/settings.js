(function(back) {
  let settings = require('Storage').readJSON('banglerun.json',1)||{'units_in_km': true};
  function save(key, value) {
    settings[key] = value;
    require('Storage').write('banglerun.json',settings);
  }
  const appMenu = {
    '': {'title': 'BangleRun Settings'},
    '< Back': back,
    'Distance units': {
      value: settings.units_in_km,
      format : v => v?"km":"mi",
      onchange: v => {save('units_in_km', v);}
    }   
  };
  E.showMenu(appMenu)
})
