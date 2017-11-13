<nav class="navbar navbar-expand-lg  navbar-dark bg-primary">
  <a class="navbar-brand" href="{{site_url( 'home' ) }}">Singular</a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto"></ul>

    <ul class="navbar-nav my-2 my-lg-0">
    
      @if ( auth() )
      <li class="nav-item">
        <a class="nav-link">
          {{ auth()->name }}
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{ site_url( 'auth/logout' ) }}">
          Sair
        </a>
      </li>
      @endif

      @if ( !auth() )
      <li class="nav-item">
        <a class="nav-link" href="{{ site_url( 'auth' ) }}">
          Login
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{{ site_url( 'auth/signup' ) }}">
          Signup
        </a>
      </li>
      @endif

    </ul>
  </div>
</nav>