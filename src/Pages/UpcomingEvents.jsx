import { useEffect, useMemo, useState } from 'react'

const gpCalendar2026 = [
	{
		id: 'aus',
		round: 1,
		name: 'Australian Grand Prix',
		circuit: 'Albert Park Circuit',
		city: 'Melbourne',
		country: 'Australia',
		date: '2026-03-08',
		laps: 58,
		distanceKm: 306.12,
		lat: -37.8497,
		lon: 144.968,
		details:
			'A fast street circuit around Albert Park where balance and traction are key in mixed-speed corners.',
	},
	{
		id: 'chn',
		round: 2,
		name: 'Chinese Grand Prix',
		circuit: 'Shanghai International Circuit',
		city: 'Shanghai',
		country: 'China',
		date: '2026-03-15',
		laps: 56,
		distanceKm: 305.06,
		lat: 31.3389,
		lon: 121.2197,
		details:
			'Long-radius corners and one of the longest straights on the calendar challenge tire management and top speed.',
	},
	{
		id: 'jpn',
		round: 3,
		name: 'Japanese Grand Prix',
		circuit: 'Suzuka Circuit',
		city: 'Suzuka',
		country: 'Japan',
		date: '2026-04-05',
		laps: 53,
		distanceKm: 307.47,
		lat: 34.8431,
		lon: 136.5419,
		details:
			'A driver-favorite figure-eight circuit with iconic high-speed esses and demanding aerodynamic setup.',
	},
	{
		id: 'bhr',
		round: 4,
		name: 'Bahrain Grand Prix',
		circuit: 'Bahrain International Circuit',
		city: 'Sakhir',
		country: 'Bahrain',
		date: '2026-04-12',
		laps: 57,
		distanceKm: 308.23,
		lat: 26.0325,
		lon: 50.5106,
		details:
			'A night race in the desert where rear tire wear and traction out of slow corners define strategy options.',
	},
	{
		id: 'sau',
		round: 5,
		name: 'Saudi Arabian Grand Prix',
		circuit: 'Jeddah Corniche Circuit',
		city: 'Jeddah',
		country: 'Saudi Arabia',
		date: '2026-04-19',
		laps: 50,
		distanceKm: 308.45,
		lat: 21.6319,
		lon: 39.1044,
		details:
			'A very high-speed street track with limited runoff where precision and confidence near walls are essential.',
	},
	{
		id: 'mia',
		round: 6,
		name: 'Miami Grand Prix',
		circuit: 'Miami International Autodrome',
		city: 'Miami',
		country: 'United States',
		date: '2026-05-03',
		laps: 57,
		distanceKm: 308.37,
		lat: 25.9581,
		lon: -80.2389,
		details:
			'A mixed-profile street-style circuit with long straights, technical sectors, and frequent overtaking chances.',
	},
	{
		id: 'emr',
		round: 7,
		name: 'Emilia Romagna Grand Prix',
		circuit: 'Autodromo Enzo e Dino Ferrari',
		city: 'Imola',
		country: 'Italy',
		date: '2026-05-17',
		laps: 63,
		distanceKm: 309.05,
		lat: 44.3439,
		lon: 11.7167,
		details:
			'Narrow old-school layout with flowing sections and little room for mistakes, rewarding committed driving.',
	},
	{
		id: 'mon',
		round: 8,
		name: 'Monaco Grand Prix',
		circuit: 'Circuit de Monaco',
		city: 'Monte Carlo',
		country: 'Monaco',
		date: '2026-05-24',
		laps: 78,
		distanceKm: 260.29,
		lat: 43.7347,
		lon: 7.4206,
		details:
			'The ultimate test of precision and concentration, where qualifying performance is often decisive for victory.',
	},
	{
		id: 'esp',
		round: 9,
		name: 'Spanish Grand Prix',
		circuit: 'Circuit de Barcelona-Catalunya',
		city: 'Barcelona',
		country: 'Spain',
		date: '2026-06-07',
		laps: 66,
		distanceKm: 307.24,
		lat: 41.57,
		lon: 2.2611,
		details:
			'A benchmark circuit for aero efficiency and tire management with a combination of long and medium-speed turns.',
	},
	{
		id: 'can',
		round: 10,
		name: 'Canadian Grand Prix',
		circuit: 'Circuit Gilles Villeneuve',
		city: 'Montreal',
		country: 'Canada',
		date: '2026-06-14',
		laps: 70,
		distanceKm: 305.27,
		lat: 45.5006,
		lon: -73.5228,
		details:
			'A stop-and-go track featuring heavy braking zones and chicanes that reward confidence over kerbs.',
	},
	{
		id: 'aut',
		round: 11,
		name: 'Austrian Grand Prix',
		circuit: 'Red Bull Ring',
		city: 'Spielberg',
		country: 'Austria',
		date: '2026-06-28',
		laps: 71,
		distanceKm: 306.45,
		lat: 47.2197,
		lon: 14.7647,
		details:
			'Short lap with major elevation changes, heavy braking zones, and strategic DRS battles.',
	},
	{
		id: 'gbr',
		round: 12,
		name: 'British Grand Prix',
		circuit: 'Silverstone Circuit',
		city: 'Silverstone',
		country: 'United Kingdom',
		date: '2026-07-05',
		laps: 52,
		distanceKm: 306.2,
		lat: 52.0786,
		lon: -1.0169,
		details:
			'High-speed corners like Maggots and Becketts put aerodynamic stability and driver commitment to the limit.',
	},
	{
		id: 'bel',
		round: 13,
		name: 'Belgian Grand Prix',
		circuit: 'Circuit de Spa-Francorchamps',
		city: 'Stavelot',
		country: 'Belgium',
		date: '2026-07-19',
		laps: 44,
		distanceKm: 308.05,
		lat: 50.4372,
		lon: 5.9714,
		details:
			'One of the most challenging tracks in the world, blending long straights with iconic flowing corners.',
	},
	{
		id: 'hun',
		round: 14,
		name: 'Hungarian Grand Prix',
		circuit: 'Hungaroring',
		city: 'Mogyorod',
		country: 'Hungary',
		date: '2026-07-26',
		laps: 70,
		distanceKm: 306.63,
		lat: 47.5789,
		lon: 19.2486,
		details:
			'A technical layout where downforce and rhythm matter, often compared to Monaco without barriers.',
	},
	{
		id: 'ned',
		round: 15,
		name: 'Dutch Grand Prix',
		circuit: 'Circuit Zandvoort',
		city: 'Zandvoort',
		country: 'Netherlands',
		date: '2026-08-23',
		laps: 72,
		distanceKm: 306.59,
		lat: 52.3888,
		lon: 4.5409,
		details:
			'Banked corners and a narrow racing line make setup compromise and clean execution critical.',
	},
	{
		id: 'ita',
		round: 16,
		name: 'Italian Grand Prix',
		circuit: 'Autodromo Nazionale Monza',
		city: 'Monza',
		country: 'Italy',
		date: '2026-09-06',
		laps: 53,
		distanceKm: 306.72,
		lat: 45.6156,
		lon: 9.2811,
		details:
			'The Temple of Speed demands low-drag efficiency, late braking, and confidence through high-speed chicanes.',
	},
	{
		id: 'aze',
		round: 17,
		name: 'Azerbaijan Grand Prix',
		circuit: 'Baku City Circuit',
		city: 'Baku',
		country: 'Azerbaijan',
		date: '2026-09-20',
		laps: 51,
		distanceKm: 306.05,
		lat: 40.3725,
		lon: 49.8533,
		details:
			'Street-circuit walls combined with an extremely long straight create a unique low-downforce challenge.',
	},
	{
		id: 'sin',
		round: 18,
		name: 'Singapore Grand Prix',
		circuit: 'Marina Bay Street Circuit',
		city: 'Singapore',
		country: 'Singapore',
		date: '2026-10-04',
		laps: 62,
		distanceKm: 306.14,
		lat: 1.2914,
		lon: 103.864,
		details:
			'A humid night race with many slow corners, high concentration demands, and frequent strategic variation.',
	},
	{
		id: 'usa',
		round: 19,
		name: 'United States Grand Prix',
		circuit: 'Circuit of The Americas',
		city: 'Austin',
		country: 'United States',
		date: '2026-10-18',
		laps: 56,
		distanceKm: 308.41,
		lat: 30.1328,
		lon: -97.6411,
		details:
			'A varied, flowing layout inspired by classic circuits, mixing high-speed sweepers and heavy braking zones.',
	},
	{
		id: 'mex',
		round: 20,
		name: 'Mexico City Grand Prix',
		circuit: 'Autodromo Hermanos Rodriguez',
		city: 'Mexico City',
		country: 'Mexico',
		date: '2026-10-25',
		laps: 71,
		distanceKm: 305.35,
		lat: 19.4042,
		lon: -99.0907,
		details:
			'At high altitude, reduced air density impacts cooling, drag, and power unit behavior in unique ways.',
	},
	{
		id: 'bra',
		round: 21,
		name: 'Sao Paulo Grand Prix',
		circuit: 'Autodromo Jose Carlos Pace',
		city: 'Sao Paulo',
		country: 'Brazil',
		date: '2026-11-08',
		laps: 71,
		distanceKm: 305.88,
		lat: -23.7036,
		lon: -46.6997,
		details:
			'A short anti-clockwise circuit known for unpredictable weather and overtaking into Senna S.',
	},
	{
		id: 'lv',
		round: 22,
		name: 'Las Vegas Grand Prix',
		circuit: 'Las Vegas Strip Circuit',
		city: 'Las Vegas',
		country: 'United States',
		date: '2026-11-21',
		laps: 50,
		distanceKm: 310.05,
		lat: 36.1147,
		lon: -115.1728,
		details:
			'A spectacular night event with long straights and low temperatures influencing tire warm-up.',
	},
	{
		id: 'qat',
		round: 23,
		name: 'Qatar Grand Prix',
		circuit: 'Lusail International Circuit',
		city: 'Lusail',
		country: 'Qatar',
		date: '2026-11-29',
		laps: 57,
		distanceKm: 308.61,
		lat: 25.4899,
		lon: 51.4542,
		details:
			'Fast, flowing corners and a smooth surface demand sustained pace while controlling tire degradation.',
	},
	{
		id: 'abu',
		round: 24,
		name: 'Abu Dhabi Grand Prix',
		circuit: 'Yas Marina Circuit',
		city: 'Abu Dhabi',
		country: 'United Arab Emirates',
		date: '2026-12-06',
		laps: 58,
		distanceKm: 306.18,
		lat: 24.4672,
		lon: 54.6031,
		details:
			'The season finale under lights, combining heavy braking zones with traction-focused exits.',
	},
]

const weatherCodeMap = {
	0: 'Clear sky',
	1: 'Mainly clear',
	2: 'Partly cloudy',
	3: 'Overcast',
	45: 'Fog',
	48: 'Depositing rime fog',
	51: 'Light drizzle',
	53: 'Moderate drizzle',
	55: 'Dense drizzle',
	56: 'Light freezing drizzle',
	57: 'Dense freezing drizzle',
	61: 'Slight rain',
	63: 'Moderate rain',
	65: 'Heavy rain',
	66: 'Light freezing rain',
	67: 'Heavy freezing rain',
	71: 'Slight snowfall',
	73: 'Moderate snowfall',
	75: 'Heavy snowfall',
	77: 'Snow grains',
	80: 'Slight rain showers',
	81: 'Moderate rain showers',
	82: 'Violent rain showers',
	85: 'Slight snow showers',
	86: 'Heavy snow showers',
	95: 'Thunderstorm',
	96: 'Thunderstorm with slight hail',
	99: 'Thunderstorm with heavy hail',
}

function formatRaceDate(dateStr) {
	return new Intl.DateTimeFormat('en-GB', {
		weekday: 'short',
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	}).format(new Date(dateStr))
}

function UpcomingEvents() {
	const [expandedCards, setExpandedCards] = useState({})
	const [weatherByRace, setWeatherByRace] = useState({})

	const upcomingRaces = useMemo(() => {
		const today = new Date()
		today.setHours(0, 0, 0, 0)

		return gpCalendar2026.filter((race) => new Date(race.date) >= today)
	}, [])

	useEffect(() => {
		const controller = new AbortController()

		async function loadWeather() {
			const initialState = {}
			for (const race of upcomingRaces) {
				initialState[race.id] = { loading: true, error: '', data: null }
			}
			setWeatherByRace(initialState)

			try {
				const latitudes = upcomingRaces.map((race) => race.lat).join(',')
				const longitudes = upcomingRaces.map((race) => race.lon).join(',')
				const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitudes}&longitude=${longitudes}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`

				const response = await fetch(weatherApiUrl, { signal: controller.signal })
				if (!response.ok) {
					throw new Error('Weather service unavailable')
				}

				const payload = await response.json()
				const weatherList = Array.isArray(payload) ? payload : [payload]

				const nextWeatherState = {}
				upcomingRaces.forEach((race, index) => {
					const current = weatherList[index]?.current
					if (!current) {
						nextWeatherState[race.id] = {
							loading: false,
							error: 'Weather unavailable right now',
							data: null,
						}
						return
					}

					const weatherDescription = weatherCodeMap[current.weather_code] || 'Unknown conditions'

					nextWeatherState[race.id] = {
						loading: false,
						error: '',
						data: {
							temperature: Math.round(current.temperature_2m),
							windSpeed: Math.round(current.wind_speed_10m),
							description: weatherDescription,
						},
					}
				})

				setWeatherByRace(nextWeatherState)
			} catch (error) {
				if (error.name === 'AbortError') {
					return
				}

				const failedState = {}
				for (const race of upcomingRaces) {
					failedState[race.id] = {
						loading: false,
						error: 'Weather unavailable right now',
						data: null,
					}
				}
				setWeatherByRace(failedState)
			}
		}

		if (upcomingRaces.length > 0) {
			loadWeather()
		}

		return () => controller.abort()
	}, [upcomingRaces])

	const handleToggleViewMore = (raceId) => {
		setExpandedCards((previous) => ({
			...previous,
			[raceId]: !previous[raceId],
		}))
	}

	return (
		<section className="f1-subpage f1-upcoming-events-page">
			<h1>Upcoming 2026 Grand Prix</h1>
			<p>
				Track every remaining race this season and check the current local weather at each circuit.
			</p>

			<div className="f1-upcoming-grid">
				{upcomingRaces.map((race) => {
					const weather = weatherByRace[race.id]
					const isExpanded = Boolean(expandedCards[race.id])

					return (
						<article key={race.id} className="f1-upcoming-card">
							<div className="f1-upcoming-card-head">
								<span className="f1-upcoming-round">Round {race.round}</span>
								<span className="f1-upcoming-date">{formatRaceDate(race.date)}</span>
							</div>

							<h2>{race.name}</h2>

							<div className="f1-upcoming-location">
								{race.circuit}, {race.city}, {race.country}
							</div>

							<div className="f1-weather-box" aria-live="polite">
								<strong>Current Weather</strong>
								{weather?.loading && <p>Loading weather...</p>}
								{!weather?.loading && weather?.error && <p>{weather.error}</p>}
								{!weather?.loading && weather?.data && (
									<p>
										{weather.data.description} | {weather.data.temperature} deg C | Wind {weather.data.windSpeed}{' '}
										km/h
									</p>
								)}
							</div>

							{isExpanded && (
								<div className="f1-upcoming-details">
									<p>{race.details}</p>
									<p>
										Race Distance: {race.distanceKm} km | Laps: {race.laps}
									</p>
								</div>
							)}

							<button
								type="button"
								className="f1-view-more-btn"
								onClick={() => handleToggleViewMore(race.id)}
							>
								{isExpanded ? 'Hide details' : 'View more'}
							</button>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default UpcomingEvents
