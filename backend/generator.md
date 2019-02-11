[
  '{{repeat(20)}}',
  {
    id: '{{index() + 1}}',
    gender: '{{gender()}}',
    city: '{{city()}}',
    age: '{{integer(20, 40)}}',
    username: '{{surname()}}_{{integer(0,2000)}}',
    name: '{{firstName()}} {{surname()}}',
    image_thumb: 'https://via.placeholder.com/120'
  }
]