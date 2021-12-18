var app = {
    settings: {
      container: $('.calendar'),
      calendar: $('.front'),
      days: $('.weeks span'),
      form: $('.back'),
      input: $('.back input'),
      buttons: $('.back button')
    },
  
    init: function() {
      instance = this;
      settings = this.settings;
      console.log('init actions');
      this.bindUIActions();
    },
  
    swap: function(currentSide, desiredSide) {
      settings.container.toggleClass('flip');
      console.log('swap');
      currentSide.fadeOut(900);
      currentSide.hide();
      desiredSide.show();
  
    },
  
    bindUIActions: function() {
      settings.days.on('click', function(){
        instance.swap(settings.calendar, settings.form);
        settings.input.focus();
        console.log('bind ui actions');
      });
  
      settings.buttons.on('click', function(){
        console.log('onclick actions');
        instance.swap(settings.form, settings.calendar);
      });
    }
  }
  
  app.init();
  