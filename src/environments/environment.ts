// const baseURL = 'http://localhost:3000/';
const baseURL = 'http://zen-api-scheduler.herokuapp.com/';

export const environment = {
  production: false,
  api: {
    getProfessional: baseURL + 'professional',
    getCalendar: baseURL + 'calendar',
  },
};
