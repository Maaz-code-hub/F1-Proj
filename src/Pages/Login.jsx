function Login(props) {
  return (
    <section className="f1-login-wrap">
      <section className="f1-login-card">
        <h1>Team Login</h1>
        <p>Sign in to your F1 operations account</p>

        {props.error && <div className="f1-alert f1-alert-error">{props.error}</div>}
        {props.success && <div className="f1-alert f1-alert-success">{props.success}</div>}

        <form onSubmit={props.onSubmit} className="f1-login-form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={props.email}
            onChange={props.onChangeEmail}
            placeholder="driver@team.com"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={props.password}
            onChange={props.onChangePassword}
            placeholder="Enter password"
          />

          <div className="f1-checkbox-wrapper">
            <label>
              <input
                type="checkbox"
                checked={props.remember}
                onChange={props.onToggleRemember}
              />
              Remember me
            </label>
          </div>

          <button type="submit" className="f1-submit-btn">
            Sign In
          </button>
          <p className="f1-helper">Use champion@f1.com / podium for demo login.</p>
        </form>
      </section>
    </section>
  )
}

export default Login
