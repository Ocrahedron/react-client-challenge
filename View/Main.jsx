const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ plainTodos }) {
  return (
    <Layout>
      {/* <div> */}
      <div className="mainBox" style={{ width: '18rem' }}>

        <ul className="list-group">
          {plainTodos && plainTodos.map(({ id, name, status }) => (
            <>
              <li className="list-group-item active" aria-current="true">{name}</li>
              <button id={id} type="button" className="btn btn-primary">Done</button>
              <button id={id} type="button" className="btn Delete">Delete</button>
            </>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
