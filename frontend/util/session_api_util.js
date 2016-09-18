export const login = function(user, success, error){
  $.ajax({
    method: 'POST' ,
    url: '/api/session',
    data: user,
    success,
    error
  });
};

export const logout = function(success,error){
  $.ajax({
    method: 'DELETE' ,
    url: '/api/session',
    success,
    error
  });
};

export const signUp = function(user, success, error){
  $.ajax({
    method: 'POST' ,
    url: `/api/users`,
    data: user,
    success,
    error
  });
};
