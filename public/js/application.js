const listGroup = document.querySelector('.list-group');

listGroup.addEventListener('click', async (event) => {
  // event.preventDefault();
  const { id } = event.target;

  // console.log(id);
  try {
    const response = await fetch(`/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(),
    });
    // const result = await response.json();
    if (response.status === 200) {
      const text = document.querySelector('li');
      text.style.color = 'green';
      // console.log(text);
    }
  } catch (error) {
    console.log(error);
  }
});

listGroup.addEventListener('click', async (event) => {
  const { id } = event.target;
  console.log(id);
  try {
    const response = await fetch(`/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(),
    });
    if (response.status === 200) {
      const butDelete = document.querySelector('.btn Delete');

      // butDelete.parentNode.remove();
      console.log(butDelete.parentNode.parentNode.remove());
    }
  } catch (error) {
    console.log(error);
  }
});
