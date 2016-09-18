export const fetchBenches = function(filters, success){
  $.ajax({
    method: 'GET' ,
    url: '/api/benches',
    data: filters,
    success,
    error: () => console.log('fetch bench error')
  });
};

export const createBench = function(bench, success){
  $.ajax({
    method: 'POST' ,
    url: '/api/benches',
    data: bench,
    success,
    error: () => console.log('create bench error')
  });
};

export const fetchBench = function(id, success){
  $.ajax({
    method: 'GET' ,
    url: `/api/benches/${id}`,
    success,
    error: () => console.log('error')
  });
};
