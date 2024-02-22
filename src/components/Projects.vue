<template>
    <div class="container-md">
        <h2>Projects</h2>
        <div class="row row-cols-2">
            <div class="col">
                <h3>Beehyve</h3>
                <p>I contributed to the Beehyve project, by creating an AR experience for the beehive. The hive has sensors on it, which send the live data to the cloud. The data is then fetched and displayed in the experience. The goal of the project was to show the data in a more interactive way, to make it easier to understand for the user.
                </p>
                <p>
                    Here’s a brief overview of what I did:
                    <ul>
                        <li>fetched the data and displayed it in the experience</li>
                        <li>showed the variance of the temperature in different parts of the hive, to emphasize with color where is the majority of the bees (where the temperature is the highest)</li>
                        <li>created buttons to show and hide all the data</li>
                        <li>created charts to show the development of the measurements</li>
                    </ul>

                    Tech stack:
                    <ul>
                        <li>AngularJS</li>
                        <li>Vuforia Studio</li>
                    </ul>
                    <a href="https://www.plcnext-community.net/bee-projects/using-augmented-reality/">Read more here...</a>
                </p>
            </div>
            <div class="col img-container">
                <img src="../images/beeHiveAR.png" alt="AR bee hive" id="img-beehive-AR">
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

.img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: 1px solid #E0007F;
    border-radius: 26px;
}

#img-beehive-AR {
    width: 55%;
    height: auto;
}

</style>