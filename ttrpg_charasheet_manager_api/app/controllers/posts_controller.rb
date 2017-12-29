class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:title, :author, :content, :user_id, :dungeons_and_dragons, :dadcharacter_name, :dadcharacter_player, :dadcharacter_class, :dadcharacter_level, :dadcharacter_race, :dadcharacter_alignment, :dadcharacter_deity, :dadcharacter_size, :dadcharacter_age, :dadcharacter_gender, :dadcharacter_height, :dadcharacter_weight, :dadcharacter_eyes, :dadcharacter_hair, :dadcharacter_skin, :dadcharacter_attr_str_base, :dadcharacter_attr_str_mod, :dadcharacter_attr_str_tempbase, :dadcharacter_attr_str_tempmod, :dadcharacter_attr_dex_base, :dadcharacter_attr_dex_mod, :dadcharacter_attr_dex_tempbase, :dadcharacter_attr_dex_tempmod, :dadcharacter_attr_con_base, :dadcharacter_attr_con_mod, :dadcharacter_attr_con_tempbase, :dadcharacter_attr_con_tempmod, :dadcharacter_attr_int_base, :dadcharacter_attr_int_mod, :dadcharacter_attr_int_tempbase, :dadcharacter_attr_int_tempmod, :dadcharacter_attr_wis_base, :dadcharacter_attr_wis_mod, :dadcharacter_attr_wis_tempbase, :dadcharacter_attr_wis_tempmod, :dadcharacter_attr_cha_base, :dadcharacter_attr_cha_mod, :dadcharacter_attr_cha_tempbase, :dadcharacter_attr_cha_tempmod, :dadcharacter_hp_max, :dadcharacter_hp_current, :dadcharacter_hp_nonlethaldamage, :dadcharacter_speed, :dadcharacter_ac_total, :dadcharacter_ac_armorbonus, :dadcharacter_ac_shieldbonus, :dadcharacter_ac_dexmod, :dadcharacter_ac_natarmor, :dadcharacter_ac_deflectmod, :dadcharacter_ac_miscmod, :dadcharacter_damagereduction, :dadcharacter_touch, :dadcharacter_flatfooted, :dadcharacter_initiative_total, :dadcharacter_initiative_dexmod, :dadcharacter_initiative_miscmod, :dadcharacter_fortitude_total, :dadcharacter_fortitude_base, :dadcharacter_fortitude_abilitymod, :dadcharacter_fortitude_magicmod, :dadcharacter_fortitude_miscmod, :dadcharacter_fortitude_tempmod, :dadcharacter_reflex_total, :dadcharacter_reflex_base, :dadcharacter_reflex_abilitymod, :dadcharacter_reflex_magicmod, :dadcharacter_reflex_miscmod, :dadcharacter_reflex_tempmod, :dadcharacter_will_total, :dadcharacter_will_base, :dadcharacter_will_abilitymod, :dadcharacter_will_magicmod, :dadcharacter_will_miscmod, :dadcharacter_will_tempmod, :dadcharacter_conditionalmod, :dadcharacter_bab, :dadcharacter_spellresistance, :dadcharacter_grapple_total, :dadcharacter_grapple_bab, :dadcharacter_grapple_strmod, :dadcharacter_grapple_sizemod, :dadcharacter_grapple_miscmod, :dadcharacter_attackone_name, :dadcharacter_attackone_bonus, :dadcharacter_attackone_damage, :dadcharacter_attackone_critical, :dadcharacter_attackone_range, :dadcharacter_attackone_type, :dadcharacter_attackone_note, :dadcharacter_attackone_ammoname, :dadcharacter_attackone_ammocounter, :dadcharacter_attacktwo_name, :dadcharacter_attacktwo_bonus, :dadcharacter_attacktwo_damage, :dadcharacter_attacktwo_critical, :dadcharacter_attacktwo_range, :dadcharacter_attacktwo_type, :dadcharacter_attacktwo_note, :dadcharacter_attacktwo_ammoname, :dadcharacter_attacktwo_ammocounter, :dadcharacter_attackthree_name, :dadcharacter_attackthree_bonus, :dadcharacter_attackthree_damage, :dadcharacter_attackthree_critical, :dadcharacter_attackthree_range, :dadcharacter_attackthree_type, :dadcharacter_attackthree_note, :dadcharacter_attackthree_ammoname, :dadcharacter_attackthree_ammocounter, :dadcharacter_attackfour_name, :dadcharacter_attackfour_bonus, :dadcharacter_attackfour_damage, :dadcharacter_attackfour_critical, :dadcharacter_attackfour_range, :dadcharacter_attackfour_type, :dadcharacter_attackfour_note, :dadcharacter_attackfour_ammoname, :dadcharacter_attackfour_ammocounter, :dadcharacter_attackfive_name, :dadcharacter_attackfive_bonus, :dadcharacter_attackfive_damage, :dadcharacter_attackfive_critical, :dadcharacter_attackfive_range, :dadcharacter_attackfive_type, :dadcharacter_attackfive_note, :dadcharacter_attackfive_ammoname, :dadcharacter_attackfive_ammocounter, :dadcharacter_skill_maxclassranks, :dadcharacter_skill_maxcrossclassranks, :dadcharacter_skill_appraise_usable, :dadcharacter_skill_appraise_skillmod, :dadcharacter_skill_appraise_abilitymod, :dadcharacter_skill_appraise_rank, :dadcharacter_skill_appraise_miscmod, :dadcharacter_skill_balance_usable, :dadcharacter_skill_balance_skillmod, :dadcharacter_skill_balance_abilitymod, :dadcharacter_skill_balance_rank, :dadcharacter_skill_balance_miscmod, :dadcharacter_skill_bluff_usable, :dadcharacter_skill_bluff_skillmod, :dadcharacter_skill_bluff_abilitymod, :dadcharacter_skill_bluff_rank, :dadcharacter_skill_bluff_miscmod, :dadcharacter_skill_climb_usable, :dadcharacter_skill_climb_skillmod, :dadcharacter_skill_climb_abilitymod, :dadcharacter_skill_climb_rank, :dadcharacter_skill_climb_miscmod, :dadcharacter_skill_concentration_usable, :dadcharacter_skill_concentration_skillmod, :dadcharacter_skill_concentration_abilitymod, :dadcharacter_skill_concentration_rank, :dadcharacter_skill_concentration_miscmod, :dadcharacter_skill_craftone_usable, :dadcharacter_skill_craftone_name, :dadcharacter_skill_craftone_skillmod, :dadcharacter_skill_craftone_abilitymod, :dadcharacter_skill_craftone_rank, :dadcharacter_skill_craftone_miscmod, :dadcharacter_skill_crafttwo_usable, :dadcharacter_skill_crafttwo_name, :dadcharacter_skill_crafttwo_skillmod, :dadcharacter_skill_crafttwo_abilitymod, :dadcharacter_skill_crafttwo_rank, :dadcharacter_skill_crafttwo_miscmod, :dadcharacter_skill_craftthree_usable, :dadcharacter_skill_craftthree_name, :dadcharacter_skill_craftthree_skillmod, :dadcharacter_skill_craftthree_abilitymod, :dadcharacter_skill_craftthree_rank, :dadcharacter_skill_craftthree_miscmod, :dadcharacter_skill_decipherscript_usable, :dadcharacter_skill_decipherscript_skillmod, :dadcharacter_skill_decipherscript_abilitymod, :dadcharacter_skill_decipherscript_rank, :dadcharacter_skill_decipherscript_miscmod, :dadcharacter_skill_diplomacy_usable, :dadcharacter_skill_diplomacy_skillmod, :dadcharacter_skill_diplomacy_abilitymod, :dadcharacter_skill_diplomacy_rank, :dadcharacter_skill_diplomacy_miscmod, :dadcharacter_skill_disabledevice_usable, :dadcharacter_skill_disabledevice_skillmod, :dadcharacter_skill_disabledevice_abilitymod, :dadcharacter_skill_disabledevice_rank, :dadcharacter_skill_disabledevice_miscmod, :dadcharacter_skill_disguise_usable, :dadcharacter_skill_disguise_skillmod, :dadcharacter_skill_disguise_abilitymod, :dadcharacter_skill_disguise_rank, :dadcharacter_skill_disguise_miscmod, :dadcharacter_skill_escapeartist_usable, :dadcharacter_skill_escapeartist_skillmod, :dadcharacter_skill_escapeartist_abilitymod, :dadcharacter_skill_escapeartist_rank, :dadcharacter_skill_escapeartist_miscmod, :dadcharacter_skill_forgery_usable, :dadcharacter_skill_forgery_skillmod, :dadcharacter_skill_forgery_abilitymod, :dadcharacter_skill_forgery_rank, :dadcharacter_skill_forgery_miscmod, :dadcharacter_skill_gatherinfo_usable, :dadcharacter_skill_gatherinfo_skillmod, :dadcharacter_skill_gatherinfo_abilitymod, :dadcharacter_skill_gatherinfo_rank, :dadcharacter_skill_gatherinfo_miscmod, :dadcharacter_skill_handleanimal_usable, :dadcharacter_skill_handleanimal_skillmod, :dadcharacter_skill_handleanimal_abilitymod, :dadcharacter_skill_handleanimal_rank, :dadcharacter_skill_handleanimal_miscmod, :dadcharacter_skill_heal_usable, :dadcharacter_skill_heal_skillmod, :dadcharacter_skill_heal_abilitymod, :dadcharacter_skill_heal_rank, :dadcharacter_skill_heal_miscmod, :dadcharacter_skill_hide_usable, :dadcharacter_skill_hide_skillmod, :dadcharacter_skill_hide_abilitymod, :dadcharacter_skill_hide_rank, :dadcharacter_skill_hide_miscmod, :dadcharacter_skill_intimidate_usable, :dadcharacter_skill_intimidate_skillmod, :dadcharacter_skill_intimidate_abilitymod, :dadcharacter_skill_intimidate_rank, :dadcharacter_skill_intimidate_miscmod, :dadcharacter_skill_jump_usable, :dadcharacter_skill_jump_skillmod, :dadcharacter_skill_jump_abilitymod, :dadcharacter_skill_jump_rank, :dadcharacter_skill_jump_miscmod, :dadcharacter_skill_knowledgeone_usable, :dadcharacter_skill_knowledgeone_name, :dadcharacter_skill_knowledgeone_skillmod, :dadcharacter_skill_knowledgeone_abilitymod, :dadcharacter_skill_knowledgeone_rank, :dadcharacter_skill_knowledgeone_miscmod, :dadcharacter_skill_knowledgetwo_usable, :dadcharacter_skill_knowledgetwo_name, :dadcharacter_skill_knowledgetwo_skillmod, :dadcharacter_skill_knowledgetwo_abilitymod, :dadcharacter_skill_knowledgetwo_rank, :dadcharacter_skill_knowledgetwo_miscmod, :dadcharacter_skill_knowledgethree_usable, :dadcharacter_skill_knowledgethree_name, :dadcharacter_skill_knowledgethree_skillmod, :dadcharacter_skill_knowledgethree_abilitymod, :dadcharacter_skill_knowledgethree_rank, :dadcharacter_skill_knowledgethree_miscmod, :dadcharacter_skill_knowledgefour_usable, :dadcharacter_skill_knowledgefour_name, :dadcharacter_skill_knowledgefour_skillmod, :dadcharacter_skill_knowledgefour_abilitymod, :dadcharacter_skill_knowledgefour_rank, :dadcharacter_skill_knowledgefour_miscmod, :dadcharacter_skill_knowledgefive_usable, :dadcharacter_skill_knowledgefive_name, :dadcharacter_skill_knowledgefive_skillmod, :dadcharacter_skill_knowledgefive_abilitymod, :dadcharacter_skill_knowledgefive_rank, :dadcharacter_skill_knowledgefive_miscmod, :dadcharacter_skill_listen_usable, :dadcharacter_skill_listen_skillmod, :dadcharacter_skill_listen_abilitymod, :dadcharacter_skill_listen_rank, :dadcharacter_skill_listen_miscmod, :dadcharacter_skill_movesilent_usable, :dadcharacter_skill_movesilent_skillmod, :dadcharacter_skill_movesilent_abilitymod, :dadcharacter_skill_movesilent_rank, :dadcharacter_skill_movesilent_miscmod, :dadcharacter_skill_openlock_usable, :dadcharacter_skill_openlock_skillmod, :dadcharacter_skill_openlock_abilitymod, :dadcharacter_skill_openlock_rank, :dadcharacter_skill_openlock_miscmod, :dadcharacter_skill_performone_usable, :dadcharacter_skill_performone_name, :dadcharacter_skill_performone_skillmod, :dadcharacter_skill_performone_abilitymod, :dadcharacter_skill_performone_rank, :dadcharacter_skill_performone_miscmod, :dadcharacter_skill_performtwo_usable, :dadcharacter_skill_performtwo_name, :dadcharacter_skill_performtwo_skillmod, :dadcharacter_skill_performtwo_abilitymod, :dadcharacter_skill_performtwo_rank, :dadcharacter_skill_performtwo_miscmod, :dadcharacter_skill_performthree_usable, :dadcharacter_skill_performthree_name, :dadcharacter_skill_performthree_skillmod, :dadcharacter_skill_performthree_abilitymod, :dadcharacter_skill_performthree_rank, :dadcharacter_skill_performthree_miscmod, :dadcharacter_skill_professionone_usable, :dadcharacter_skill_professionone_name, :dadcharacter_skill_professionone_skillmod, :dadcharacter_skill_professionone_abilitymod, :dadcharacter_skill_professionone_rank, :dadcharacter_skill_professionone_miscmod, :dadcharacter_skill_professiontwo_usable, :dadcharacter_skill_professiontwo_name, :dadcharacter_skill_professiontwo_skillmod, :dadcharacter_skill_professiontwo_abilitymod, :dadcharacter_skill_professiontwo_rank, :dadcharacter_skill_professiontwo_miscmod, :dadcharacter_skill_ride_usable, :dadcharacter_skill_ride_skillmod, :dadcharacter_skill_ride_abilitymod, :dadcharacter_skill_ride_rank, :dadcharacter_skill_ride_miscmod, :dadcharacter_skill_search_usable, :dadcharacter_skill_search_skillmod, :dadcharacter_skill_search_abilitymod, :dadcharacter_skill_search_rank, :dadcharacter_skill_search_miscmod, :dadcharacter_skill_sensemotive_usable, :dadcharacter_skill_sensemotive_skillmod, :dadcharacter_skill_sensemotive_abilitymod, :dadcharacter_skill_sensemotive_rank, :dadcharacter_skill_sensemotive_miscmod, :dadcharacter_skill_sleightofhand_usable, :dadcharacter_skill_sleightofhand_skillmod, :dadcharacter_skill_sleightofhand_abilitymod, :dadcharacter_skill_sleightofhand_rank, :dadcharacter_skill_sleightofhand_miscmod, :dadcharacter_skill_spellcraft_usable, :dadcharacter_skill_spellcraft_skillmod, :dadcharacter_skill_spellcraft_abilitymod, :dadcharacter_skill_spellcraft_rank, :dadcharacter_skill_spellcraft_miscmod, :dadcharacter_skill_spot_usable, :dadcharacter_skill_spot_skillmod, :dadcharacter_skill_spot_abilitymod, :dadcharacter_skill_spot_rank, :dadcharacter_skill_spot_miscmod, :dadcharacter_skill_survival_usable, :dadcharacter_skill_survival_skillmod, :dadcharacter_skill_survival_abilitymod, :dadcharacter_skill_survival_rank, :dadcharacter_skill_survival_miscmod, :dadcharacter_skill_swim_usable, :dadcharacter_skill_swim_skillmod, :dadcharacter_skill_swim_abilitymod, :dadcharacter_skill_swim_rank, :dadcharacter_skill_swim_miscmod, :dadcharacter_skill_tumble_usable, :dadcharacter_skill_tumble_skillmod, :dadcharacter_skill_tumble_abilitymod, :dadcharacter_skill_tumble_rank, :dadcharacter_skill_tumble_miscmod, :dadcharacter_skill_usemagicdevice_usable, :dadcharacter_skill_usemagicdevice_skillmod, :dadcharacter_skill_usemagicdevice_abilitymod, :dadcharacter_skill_usemagicdevice_rank, :dadcharacter_skill_usemagicdevice_miscmod, :dadcharacter_skill_userope_usable, :dadcharacter_skill_userope_skillmod, :dadcharacter_skill_userope_abilitymod, :dadcharacter_skill_userope_rank, :dadcharacter_skill_userope_miscmod, :dadcharacter_skill_extraskillone_usable, :dadcharacter_skill_extraskillone_name, :dadcharacter_skill_extraskillone_keyability, :dadcharacter_skill_extraskillone_skillmod, :dadcharacter_skill_extraskillone_abilitymod, :dadcharacter_skill_extraskillone_rank, :dadcharacter_skill_extraskillone_miscmod, :dadcharacter_skill_extraskilltwo_usable, :dadcharacter_skill_extraskilltwo_name, :dadcharacter_skill_extraskilltwo_keyability, :dadcharacter_skill_extraskilltwo_skillmod, :dadcharacter_skill_extraskilltwo_abilitymod, :dadcharacter_skill_extraskilltwo_rank, :dadcharacter_skill_extraskilltwo_miscmod, :dadcharacter_skill_extraskillthree_usable, :dadcharacter_skill_extraskillthree_name, :dadcharacter_skill_extraskillthree_keyability, :dadcharacter_skill_extraskillthree_skillmod, :dadcharacter_skill_extraskillthree_abilitymod, :dadcharacter_skill_extraskillthree_rank, :dadcharacter_skill_extraskillthree_miscmod, :dadcharacteracsizemod)
    end
end
