game.resources = [
    /* Graphics. 
     * @example
     * {name: "example", type:"image", src: "data/img/example.png"},
     */
    {name: "background-tiles", type: "image", src: "data/img/background-tiles.png"},
    /**
     * Each name of the images keeps consistent with how they are called in Tiled.
     */
    {name: "meta-tiles", type: "image", src: "data/img/meta-tiles.png"},
    {name: "Tiles_0", type: "image", src: "data/img/Tiles_0.png"},
    {name: "mario", type: "image", src: "data/img/player1.png"},
    /**
     * I had to use the original Mario character because the custom
     * character animation didn't have a grow animation.
     */
    {name: "title-screen", type: "image", src: "data/img/mario-wall.jpg"},
    /**
     * I used an old classic Mario background instead of the cavern background
     * to give a Mario feel to the game.
     */
    {name: "slime", type: "image", src: "data/img/slime-spritesheet.png"},
    {name: "mushroom", type: "image", src: "data/img/mushroom.png"},
    /* Atlases 
     * @example
     * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
     */

    /* Maps. 
     * @example
     * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
     * {name: "example01", type: "tmx", src: "data/map/example01.json"},
     */
    {name: "JDT-level-04", type: "tmx", src: "data/map/JDT-level-04.tmx"},
    {name: "JDT-level-05", type: "tmx", src: "data/map/JDT-level-05.tmx"},
    {name: "JDT-level-06", type: "tmx", src: "data/map/JDT-level-06.tmx"},
    {name: "JDT-level-07", type: "tmx", src: "data/map/JDT-level-07.tmx"}
    /* Background music. 
     * @example
     * {name: "example_bgm", type: "audio", src: "data/bgm/"},
     */

    /* Sound effects. 
     * @example
     * {name: "example_sfx", type: "audio", src: "data/sfx/"}
     */
];
