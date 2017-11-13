<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title }}</title>

    <link rel="stylesheet" type="text/css" href="{{ base_url( 'public/dist/singular.min.css' ) }}" media="screen">
</head>
<body>

    @include('components.navbar')
    <div class="container wrapper">
        <div class="row">
            <div class="col-4">
                @include('components.sidebar')
            </div>
            <div class="col padding-bottom-50">
                @yield('content')
            </div>
        </div>
    </div>

    <script src="{{ base_url( 'public/dist/singular.min.js' ) }}"></script>    
</body>
</html>