const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Behaviors.Fade,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Platform.Exps.VectorX,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Plugins.Audio.Acts.StopAll
	];
};
self.C3_JsPropNameTable = [
	{Tilemap: 0},
	{Platform: 0},
	{Player: 0},
	{Solid: 0},
	{Fade: 0},
	{Door: 0},
	{Button: 0},
	{ButtonTrigger: 0},
	{End: 0},
	{Torn: 0},
	{Player2: 0},
	{FinalMsg: 0},
	{Audio: 0}
];

self.InstanceType = {
	Tilemap: class extends self.ITilemapInstance {},
	Player: class extends self.ISpriteInstance {},
	Door: class extends self.ISpriteInstance {},
	Button: class extends self.ISpriteInstance {},
	ButtonTrigger: class extends self.ISpriteInstance {},
	Solid: class extends self.ISpriteInstance {},
	End: class extends self.ISpriteInstance {},
	Torn: class extends self.ISpriteInstance {},
	Player2: class extends self.ISpriteInstance {},
	FinalMsg: class extends self.ITextInstance {},
	Audio: class extends self.IInstance {}
}