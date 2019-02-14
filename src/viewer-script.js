module.exports = {
  initAppForPage: () => {},
  createControllers: controllerConfigs =>
    controllerConfigs.map(c => {
      return Promise.resolve({
        pageReady: ($w, api) => {
          if (c.type === '9b6ec991-93d4-4a85-ac7c-e4196e11073a') {
            const props = {
              height: 100,
              cssBaseUrl: 'https://localhost:3200/',
              setHeight: ({ height }) => {
                console.log('@@@@@@@@@@@@@@2', height);
                c.setProps({ height });
              },
              helloThere: () => console.log('whyyyyyy'),
            };
            c.setProps(props);
          }

          return Promise.resolve();
        },
        exports: () => ({}),
      });
    }),
  exports: {},
};
