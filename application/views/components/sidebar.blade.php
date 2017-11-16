<div id="aside">

    <div class="card">
        <div class="card-title-aside">
            Histórias            
        </div>
        <ul class="card-ul">
            @if( auth() )
            <li>
                <a href="{{ site_url( 'category/list' ) }}">
                    Categorias
                </a>
            </li>
            <li>
                <a href="{{ site_url( 'auth/logout' ) }}">
                    Personagens
                </a>
            </li>
            <li>
                <a href="{{ site_url( 'auth/logout' ) }}">
                    Histórias
                </a>
            </li>
            @endif
        </ul>
    </div><!-- card de acesso rápido -->

    <div class="card">
        <div class="card-title-aside">
            Acesso rápido            
        </div>
        <ul class="card-ul">
            @if( !auth() )
            <li>
                <a href="{{ site_url( 'auth' ) }}">Login</a>
            </li>
            <li>
                <a href="{{ site_url( 'auth/signup' ) }}">Signup</a>
            </li>
            @else
            <li>
                <a href="{{ site_url( 'auth/logout' ) }}">Sair</a>
            </li>
            @endif
        </ul>
    </div><!-- card de acesso rápido -->
</div>