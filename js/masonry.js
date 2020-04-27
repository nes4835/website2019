<script>
                    var grid = document.querySelector('.grid');

                    var msnry = new Masonry( grid, {
                      itemSelector: '.grid-item',
                      columnWidth: 50,
                    });

                    imagesLoaded( grid ).on( 'progress', function() {
                      // layout Masonry after each image loads
                      msnry.layout();
                    });

                </script>