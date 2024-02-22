import { IonAlert, IonContent, IonFab, IonFabButton, IonFabList, IonFooter, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import { addOutline, cameraOutline, keypadSharp, pencilOutline, trash } from 'ionicons/icons';
import './Home.css';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {

	const [countdown, setCountdown] = useState<Date>();

	useIonViewDidEnter(() => {
		setInterval(() => {
			setCountdown(new Date());
		}, 100)
	})

	return (
		<IonPage>
			{countdown?.toTimeString()}
			<IonFab vertical='bottom' horizontal='end'>
				<IonFabButton id="present-input">
					<IonIcon icon={addOutline}></IonIcon>
				</IonFabButton>
			</IonFab>
			<IonAlert
				trigger='present-input'
				header='输入账户信息'
				inputs={[
					{
						name: "accountName",
						placeholder: '请输入账户名'
					},
					{
						name: "accountKey",
						placeholder: '请输入密钥'
					}
				]}
				buttons={[
					{
						text: "取消",
						role: "cancel"
					},
					{
						text: "确定",
						role: 'confirm',
						handler: (value)=>{
							console.log(value)
						},
					}
				]}
			>
			</IonAlert>
			<IonFooter></IonFooter>
		</IonPage>
	);
};

export default Home;