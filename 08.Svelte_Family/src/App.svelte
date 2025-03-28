<script>
    import Home from './components/Home/Home.svelte';
    import Parent from './components/Parent/Parent.svelte';

    const parentName = ['Adam', 'Eva'];
    const children = [
        {
            name: "Kain",
            familySheep: "Black sheep"
        }, 
        {
            name: "Abel",
            familySheep: "Gray sheep"
        },
        {
            name: "Leona",
            isGirl: true
        }
    ]
</script>

<Home>
    <Parent 
        name={parentName[0]}
        {children}
    />

    <Parent 
        name={parentName[1]}
        {children}
    />
</Home>