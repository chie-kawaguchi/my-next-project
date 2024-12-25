import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デイビッド・チャン",
      position: "CEO",
      profile:
        "プロフィールテキストプロフィールテキストプロフィールテキストプロフィールテキストプロフィールテキスト",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "エミリーサンダース",
      position: "CEO",
      profile:
        "プロフィールテキストプロフィールテキストプロフィールテキストプロフィールテキストプロフィールテキスト",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "ジョンウィルソン",
      position: "CEO",
      profile:
        "プロフィールテキストプロフィールテキストプロフィールテキストプロフィールテキストプロフィールテキスト",
    },
  ],
};
export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p>メンバーが登録されていません</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
