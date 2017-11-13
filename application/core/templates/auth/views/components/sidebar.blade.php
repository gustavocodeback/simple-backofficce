<div id="aside">
    <div class="card">
        <div class="card-title-aside">
            Páginas            
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
    </div>
</div>