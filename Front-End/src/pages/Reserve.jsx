export default function Reserve () {
    return(
        <>
        <h1>Reserve now!</h1>
        <p>Click the number of your desired seat below. If you do not get your desired seat, find the next possible option.
            Prices of seats vary depending on where the seat is located on the bus. Prices for seats are: 
                Seats 25-28: $4
                Seats 1-16: $5
                Seats 17-24 and 29-33: $6
        </p>
            <img src="/BusLayout.jpg" alt="Bus layout" />

            <div>
                <label for="Seats">Seats:</label>
                <select id="Seats" name="Seats">
                    <option value="1-16">1-16</option>
                    <option value="17-24">17-24</option>
                    <option value="25-28">25-28</option>
                    <option value="29-33">29-33</option>
                </select>
            </div>
        </>
    );
}